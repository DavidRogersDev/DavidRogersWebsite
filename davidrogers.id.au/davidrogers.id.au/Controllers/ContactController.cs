﻿using System.Web.Mvc;
using davidrogers.id.au.Infrastructure;

namespace davidrogers.id.au.Controllers
{
    public class ContactController : Controller
    {
        public ActionResult Index()
        {
            return RedirectToAction(WebUiConstants.IndexAction, WebUiConstants.HomeController);
        }
    }
}