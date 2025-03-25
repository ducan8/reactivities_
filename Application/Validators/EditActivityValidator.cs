using Application.Activities.Commands;
using Application.DTOs;
using FluentValidation;

namespace Application.Validators
{
    public class EditActivityValidator : BaseActivityValidator<EditActivity.Command, EditActivityDTO>
    {
        public EditActivityValidator() : base(x => x.ActivityDTO)
        {
            RuleFor(x => x.ActivityDTO.Id)
                .NotEmpty().WithMessage("Id is require");
        }
    }
}
