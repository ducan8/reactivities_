using Application.Activities.Commands;
using Application.Activities.Queries;
using Application.DTOs;
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
            var result = await Mediator.Send(new GetActivityDetails.Query() { Id = id });

            return HandleResult(result);
        }

        [HttpPost]
        public async Task<ActionResult<string>> CreateActivity(CreateActivityDTO activityDTO)
        {
            var result = await Mediator.Send(new CreateActivity.Command() { ActivityDTO = activityDTO });
            return HandleResult(result);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateActivity(EditActivityDTO activityDTO)
        {
            var res = await Mediator.Send(new EditActivity.Command() { ActivityDTO = activityDTO });
            return HandleResult(res);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteActivity(string Id)
         {
            var res = await Mediator.Send(new DeleteActivity.Command() { Id = Id });
            return HandleResult(res);
        }
    }
}
