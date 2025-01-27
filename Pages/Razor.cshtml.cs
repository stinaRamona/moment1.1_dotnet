using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyApp.Namespace
{
    public class RazorModel : PageModel
    {
        public DateTime DateTime {get; set;}
        public void OnGet()
        {
        }
    }
}
