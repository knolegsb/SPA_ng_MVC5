﻿using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SPA_ng_MVC5.Startup))]
namespace SPA_ng_MVC5
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
