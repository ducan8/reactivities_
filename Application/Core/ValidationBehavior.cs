using FluentValidation;
using MediatR;

namespace Application.Core
{
    public class ValidationBehavior<TRequest, TRepsponse>(IValidator<TRequest> validator = null) : IPipelineBehavior<TRequest, TRepsponse> where TRequest : notnull
    {
        //create middleware for mediatr
        public async Task<TRepsponse> Handle(TRequest request, RequestHandlerDelegate<TRepsponse> next, CancellationToken cancellationToken)
        {
            if (validator == null)
            {
                return await next();
            }

            var validationResult = await validator.ValidateAsync(request, cancellationToken);

            if(!validationResult.IsValid)
            {
                //return collection of errors
                throw new ValidationException(validationResult.Errors);
            }

            return await next();
        }
    }
}
