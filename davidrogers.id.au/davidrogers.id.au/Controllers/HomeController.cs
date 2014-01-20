using System.Web.Mvc;

namespace davidrogers.id.au.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "davidrogers.id.au - Dave's Home";
            return View();
        }
    }
}