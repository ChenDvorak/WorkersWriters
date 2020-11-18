using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Applications.Articles;
using Applications.Users;

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
            services.AddScoped(typeof(WriterManager));
        }
    }
}
