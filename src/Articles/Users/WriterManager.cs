using DB;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using SequentialGuid;

namespace Applications.Users
{
    public class WriterManager
    {
        private readonly DB.WWContext _db;

        public WriterManager(WWContext db)
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
        /// Confirm password with eamil whether can sign in or not
        /// </summary>
        /// <param name="email"></param>
        /// <param name="passwordHash"></param>
        /// <returns></returns>
        public async Task<bool> ConfirmPasswordAsync(string email, string passwordHash)
        {
            if (string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(passwordHash))
                return false;
            var writer = await _db.Users.SingleOrDefaultAsync(user => 
                !user.IsLoggedOut && 
                user.NormalizedEmail.Equals(email, StringComparison.OrdinalIgnoreCase) &&
                user.PasswordHash.Equals(passwordHash, StringComparison.OrdinalIgnoreCase));

            if (writer == null) return false;
            writer.LogInStamp = SequentialGuidGenerator.Instance.NewGuid();
            int changedRow = await _db.SaveChangesAsync();
            if (changedRow == 1)
                return true;
            throw new Exception("Dabebase save change exception occur");
        }

    }
}
