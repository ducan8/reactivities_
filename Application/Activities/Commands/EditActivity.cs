using Application.Core;
using Application.DTOs;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands
{
    public class EditActivity
    {
        public class Command : IRequest<Result<Unit>>
        {
            public required EditActivityDTO ActivityDTO { get; set; }
        }

        public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command, Result<Unit>>
        {
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await context.Activities.FindAsync([request.ActivityDTO.Id], cancellationToken);

                if (activity is null) return Result<Unit>.Failure("Can't find the activity", 404);
                
                mapper.Map(request.ActivityDTO, activity);

                var res = await context.SaveChangesAsync(cancellationToken) > 0;

                if (res) return Result<Unit>.Success(Unit.Value);
                return Result<Unit>.Failure("Failed to edit the activity", 400);
            }
        }
    }
}
