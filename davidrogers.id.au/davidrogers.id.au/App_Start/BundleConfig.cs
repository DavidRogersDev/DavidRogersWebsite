using System.Web.Optimization;

namespace davidrogers.id.au
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.UseCdn = true;

            //var jqueryCdnPath = "http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.10.2.min.js";

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js",
                "~/Scripts/cycle/jquery.cycle2.js",
                "~/Scripts/app/constants.js"
                ));


            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrapPlusToastr").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js",
                      "~/Scripts/toastr.js"
                      ));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/angular/angular.js",
                      "~/Scripts/angular/angular-resource.js",
                      "~/Scripts/angular/angular-route.js",
                      "~/Scripts/angular/angular-animate.js"
                      ));

            bundles.Add(new ScriptBundle("~/bundles/qAndBreeze").Include(
                      "~/Scripts/q.js",
                      "~/Scripts/breeze.debug.js",
                      "~/Scripts/breeze.min.js",
                      "~/Scripts/breeze.to$q.js"
                      ));

            bundles.Add(new ScriptBundle("~/bundles/appAll").Include(
                      "~/Scripts/app/app.js",
                      "~/Scripts/app/common/logger.js",
                      "~/Scripts/app/config.js",
                      "~/Scripts/app/config.route.js",
                      "~/Scripts/app/entityManagerFactory.js",
                      "~/Scripts/app/services/datacontext.js",
                      "~/Scripts/app/controllers/MainController.js",
                      "~/Scripts/app/controllers/ArticlesController.js",
                      "~/Scripts/app/controllers/ContactController.js",
                      "~/Scripts/app/controllers/GitHubController.js",
                      "~/Scripts/app/controllers/ProjectsController.js",
                      "~/Scripts/app/controllers/HomeController.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/bootstrap-theme.css",
                      "~/Content/font-awesome.css",
                      "~/Content/site.css",
                      "~/Content/toastr.css"));
        }
    }
}