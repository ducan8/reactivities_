using Application.Activities.Commands;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new GetActivitiesList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivityDetail(string id)
        {
            var activity = await Mediator.Send(new GetActivityDetails.Query() { Id = id });

            if (activity == null) return NotFound();
            return activity;
        }

        [HttpPost]
        public async Task<ActionResult<string>> CreateActivity(Activity activity)
        {
            var id = await Mediator.Send(new CreateActivity.Command() { Activity = activity });
            return id;
        }

        [HttpPut]
        public async Task<ActionResult> UpdateActivity(Activity activity)
        {
            await Mediator.Send(new EditActivity.Command() { Activity = activity });
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteActivity(string Id)
         {
            await Mediator.Send(new DeleteActivity.Command() { Id = Id });
            return Ok();
        }
    }
}
