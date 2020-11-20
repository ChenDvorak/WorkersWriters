using System.Threading.Tasks;
using Writers.Users;

namespace Writers
{
    public interface ISigner
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        Task<bool> ConfirmEmailAsync(string email);
        Task<SignInResult> SignInAsync(string email, string passwordHash);
        Task SignOutAsync(string email);
    }
}
