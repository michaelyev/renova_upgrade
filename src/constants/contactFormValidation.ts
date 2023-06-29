export const contactFormValidation = {
    email: {
        required: 'please provide your email',
        validate: (value?: string): string | boolean => {
            if (value && value.length > 256) {
              return 'Email must be at most 256 characters';
            }
      
            if (
              value &&
              !/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,6}$/.test(
                value
              )
            ) {
              return 'Email must be in the "username@domain.com" format';
            }
      
            return true;
          },
    },
    name: {
        required: 'provide your name'
    },
    phone: {
        required: 'provide your phone'
    },
    

}