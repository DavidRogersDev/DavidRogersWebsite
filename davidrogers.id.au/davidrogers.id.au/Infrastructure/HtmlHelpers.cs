using System;
using System.Collections.Generic;
using System.IO;
using System.Linq.Expressions;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace davidrogers.id.au.Infrastructure
{
    public static class HtmlHelpers
    {
        private const string ImageParameters = "{0} {1}";

        /// <summary>
        /// Helper method to create an anchor tag which contains attributes that conform to the Angularjs style guide.
        /// Note that no href is used. Routing is done vie Angularjs' routing configuration.
        /// This method also allows additional attributes to be added to the element.
        /// </summary>
        public static IHtmlString AngularLink(this HtmlHelper helper, string id, string linkText, KeyValuePair<string, string> directive, object htmlAttributes = null)
        {
            //  First create the anchor element
            var linkbuilder = new TagBuilder(WebUiConstants.Anchor);

            if (!string.IsNullOrWhiteSpace(id))
            {
                linkbuilder.GenerateId(id);
            }
            
            //  Add the Angular directive
            linkbuilder.MergeAttribute(directive.Key, directive.Value);

            if (!ReferenceEquals(null, htmlAttributes))
            {
                linkbuilder.MergeAttributes(new RouteValueDictionary(htmlAttributes));
            }
            
            linkbuilder.InnerHtml += linkText;

            // Render/return tag
            return new MvcHtmlString(linkbuilder.ToString(TagRenderMode.Normal));
        }

        /// <summary>
        /// Helper method which creates an image element. This overload allows additional attributes to be added to the element.
        /// </summary>
        public static IHtmlString Image(this HtmlHelper helper, string id, string url, string alternateText, object htmlAttributes = null)
        {
            // Instantiate a UrlHelper
            var urlHelper = new UrlHelper(helper.ViewContext.RequestContext);

            // Create tag builder
            var builder = new TagBuilder(WebUiConstants.ImageAttribute);

            // Create valid id
            if (!string.IsNullOrWhiteSpace(id))
            {
                builder.GenerateId(id);
            }

            // Add attributes
            builder.MergeAttribute(WebUiConstants.AltAttribute, alternateText);
            builder.MergeAttribute(WebUiConstants.SourceAttribute, urlHelper.Content(url));
            
            if (!ReferenceEquals(null, htmlAttributes))
            {
                builder.MergeAttributes(new RouteValueDictionary(htmlAttributes));
            }

            // Render tag
            return new MvcHtmlString(builder.ToString(TagRenderMode.SelfClosing));
        }

        /// <summary>
        /// Helper method which creates an image button. This overload allows additional attributes to be added to the element.
        /// </summary>
        public static IHtmlString ImageInputButton(this HtmlHelper helper, string id, string url, string alternateText, object htmlAttributes = null)
        {
            // Instantiate a UrlHelper
            var urlHelper = new UrlHelper(helper.ViewContext.RequestContext);

            // Create tag builder
            var builder = new TagBuilder(WebUiConstants.InputAttribute);

            // Create valid id
            if (!string.IsNullOrWhiteSpace(id))
            {
                builder.GenerateId(id);
            }

            // Add attributes
            builder.MergeAttribute(WebUiConstants.SourceAttribute, urlHelper.Content(url));
            builder.MergeAttribute(WebUiConstants.AltAttribute, alternateText);
            builder.MergeAttribute(WebUiConstants.TypeAttribute, WebUiConstants.Image);

            if (!ReferenceEquals(null, htmlAttributes))
            {
                builder.MergeAttributes(new RouteValueDictionary(htmlAttributes));
            }

            // Render tag
            return new MvcHtmlString(builder.ToString(TagRenderMode.SelfClosing));
        }

        /// <summary>
        /// Helper method which creates a button. This overload allows additional attributes to be added to the element.
        /// </summary>
        public static IHtmlString Button(this HtmlHelper helper, string id, string buttonText, string alternateText, object htmlAttributes = null)
        {
            // Create tag builder
            var builder = new TagBuilder(WebUiConstants.Button);

            // Create valid id
            if (!string.IsNullOrWhiteSpace(id))
            {
                builder.GenerateId(id);
            }

            // Add attributes
            builder.MergeAttribute(WebUiConstants.AltAttribute, alternateText);
            builder.MergeAttribute(WebUiConstants.TypeAttribute, WebUiConstants.Submit);

            if (!ReferenceEquals(null, htmlAttributes))
            {
                builder.MergeAttributes(new RouteValueDictionary(htmlAttributes));
            }

            builder.InnerHtml += buttonText;

            // Render tag
            return new MvcHtmlString(builder.ToString(TagRenderMode.Normal));
        }

        /// <summary>
        /// Helper method which creates an image button. This overload allows additional attributes to be added to the element.
        /// </summary>
        public static IHtmlString ImageButton(this HtmlHelper helper, string id, string url, string buttonText, string alternateText, object htmlAttributes = null)
        {
            
            // Create tag builder
            var builder = new TagBuilder(WebUiConstants.Button);

            // Create valid id
            if (!string.IsNullOrWhiteSpace(id))
            {
                builder.GenerateId(id);
            }

            // Add attributes            
            builder.MergeAttribute(WebUiConstants.AltAttribute, alternateText);
            builder.MergeAttribute(WebUiConstants.TypeAttribute, WebUiConstants.Submit);


            if (!ReferenceEquals(null, htmlAttributes))
            {
                builder.MergeAttributes(new RouteValueDictionary(htmlAttributes));
            }

            //  Get image and set it as child of anchor.
            builder.InnerHtml += string.Format(ImageParameters, helper.Image(string.Empty, url, alternateText), buttonText);

            // Render tag
            return new MvcHtmlString(builder.ToString(TagRenderMode.Normal));
        }

        /// <summary>
        /// Helper method which creates an image button that is an anchor link. This overload allows additional attributes to be added to the element.
        /// </summary>
        public static IHtmlString ImageLinkButton(this HtmlHelper helper, string id, string url, string hrefText, string buttonText, string alternateText, object htmlAttributes = null)
        {
            //  First create the anchor element, which will be the parent of the img
            var linkbuilder = new TagBuilder(WebUiConstants.Anchor);

            if (!string.IsNullOrWhiteSpace(id))
            {
                linkbuilder.GenerateId(id);
            }

            linkbuilder.MergeAttribute(WebUiConstants.Href, hrefText);

            if (!ReferenceEquals(null, htmlAttributes))
            {
                linkbuilder.MergeAttributes(new RouteValueDictionary(htmlAttributes));
            }

            //  Get image and set it as child of anchor.
            linkbuilder.InnerHtml += string.Format(ImageParameters, helper.Image(string.Empty, url, alternateText), buttonText);

            // Render/return tag
            return new MvcHtmlString(linkbuilder.ToString(TagRenderMode.Normal));
        }


        /// <summary>
        /// This helper is a quick and dirty one which just renders the javascript 
        /// tags for any libraries that you want to add to a page.
        /// </summary>
        public static IHtmlString Script(this HtmlHelper helper, string jsFileName)
        {
            // Instantiate a UrlHelper
            var urlHelper = new UrlHelper(helper.ViewContext.RequestContext);

            // Create tag builder
            var builder = new TagBuilder(WebUiConstants.ScriptAttribute);

            // Add attributes
            builder.MergeAttribute(WebUiConstants.SourceAttribute, urlHelper.Content(Path.Combine(WebUiConstants.ScriptsDirectory, jsFileName)));
            builder.MergeAttribute(WebUiConstants.TypeAttribute, WebUiConstants.JavascriptTypeText);

            // Render tag. Note: script tags have to have an End tag and cannot be self-closing.
            return new MvcHtmlString(builder.ToString(TagRenderMode.Normal));
        }

        /// <summary>
        /// This helper enables you to render javascript which is generated 
        /// server-side and assigned to the ClientScript property of the UiModelBase.
        /// The expression parameter gives us lambda goodness (strong typing, mmmmm).
        /// </summary>
        public static IHtmlString ScriptRenderer<T, TResult>(this HtmlHelper<T> helper, Expression<Func<T, TResult>> expression)
        {
            var builder = new TagBuilder(WebUiConstants.ScriptAttribute);

            // Add attributes
            builder.MergeAttribute(WebUiConstants.TypeAttribute, WebUiConstants.JavascriptTypeText);

            // note – not always this simple. In this app, it will be.
            var body = expression.Body as MemberExpression;

            if (!ReferenceEquals(null, body))
            {
                var propertyName = body.Member.Name;

                var value = string.Empty;
                var model = helper.ViewData.Model;

                if (!ReferenceEquals(null, model))
                {
                    var modelType = typeof(T);
                    var propertyInfo = modelType.GetProperty(propertyName);
                    var propertyValue = propertyInfo.GetValue(model, null);

                    if (!ReferenceEquals(null, propertyValue))
                    {
                        value = propertyValue.ToString();
                    }
                }

                builder.InnerHtml = value;

                // Render tag.
                return MvcHtmlString.Create(builder.ToString(TagRenderMode.Normal));
            }

            return MvcHtmlString.Empty;
        }
    }
}