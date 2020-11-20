using DB;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using SequentialGuid;

namespace Writers.Users
{
    public class WriterSignManager : ISigner
    {
        private readonly WWContext _db;

        public WriterSignManager(WWContext db)
        {
            _db = db;
        }

        /// <summary>
        /// Confirm email whether can sign in or not
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        public Task<bool> ConfirmEmailAsync(string email)
        {
            if (string.IsNullOrWhiteSpace(email)) return Task.FromResult(false);
            return _db.Users.AnyAsync(user =>
                !user.IsLoggedOut && user.NormalizedEmail.Equals(email, StringComparison.OrdinalIgnoreCase));
        }

        /// <summary>
        /// Sign in
        /// </summary>
        /// <param name="email"></param>
        /// <param name="passwordHash"></param>
        /// <returns></returns>
        public async Task<SignInResult> SignInAsync(string email, string passwordHash)
        {
            if (string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(passwordHash))
                return SignInResult.Failed;
            var writer = await _db.Users.SingleOrDefaultAsync(user =>
                !user.IsLoggedOut &&
                user.NormalizedEmail.Equals(email, StringComparison.OrdinalIgnoreCase) &&
                user.PasswordHash.Equals(passwordHash, StringComparison.OrdinalIgnoreCase));

            if (writer == null) return SignInResult.Failed;
            writer.LogInStamp = SequentialGuidGenerator.Instance.NewGuid();
            int changedRow = await _db.SaveChangesAsync();
            if (changedRow == 1)
                return SignInResult.Success(writer);
            throw new Exception("Dabebase save change exception occur");
        }

        public async Task SignOutAsync(string email)
        {
            if (string.IsNullOrWhiteSpace(email)) return;
            var writer = await _db.Users
                .SingleOrDefaultAsync(user => user.NormalizedEmail.Equals(email, StringComparison.OrdinalIgnoreCase));
            if (writer == null) return;
            writer.LogInStamp = Guid.Empty;
            await _db.SaveChangesAsync();
        }
    }
}
