using Application.Activities.Commands;
using Application.DTOs;

namespace Application.Validators
{
    public class CreateActivityValidator : BaseActivityValidator<CreateActivity.Command, CreateActivityDTO>
    {
        public CreateActivityValidator() : base(x => x.ActivityDTO)
        {
            
        }
    }
}
