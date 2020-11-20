using Applications.Articles;
using Microsoft.Extensions.DependencyInjection;

namespace Applications
{
    public static class Extensions
    {
        /// <summary>
        /// Enable DI for applications
        /// </summary>
        /// <param name="services"></param>
        public static void UseApplicotions(this ServiceCollection services)
        {
            services.AddScoped<IArcitlesManager, FictionsManager>();
        }
    }
}
