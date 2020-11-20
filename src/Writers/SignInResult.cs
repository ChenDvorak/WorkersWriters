using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Writers.Users
{
    /// <summary>
    /// The result of writer sign in
    /// </summary>
    public class SignInResult
    {
        /// <summary>
        /// Is sign in succeed
        /// </summary>
        public bool Succeed { get; private set; }
        private string _email;
        private DB.Share.UserRoles _role;

        public static SignInResult Success(DB.Tables.User user)
        {
            return new SignInResult
            {
                Succeed = true,
                _email = user.NormalizedEmail,
                _role = user.Role
            };
        }

        public static SignInResult Failed => new SignInResult();

        public string GetTokenAsync()
        {
            if (!Succeed)
                return "";

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(AuthorizationConstants.JWT_SECRET_KEY);

            var claims = new Claim[]
            {
                new Claim(ClaimTypes.Email, _email),
                new Claim(ClaimTypes.Role, _role.ToString()),
                new Claim(ClaimTypes.Expired, DateTimeOffset.UtcNow.ToString())
            };

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
