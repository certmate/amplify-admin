import { AuthState } from '@aws-amplify/ui-components';

function ConfirmSignUp({ change }) {

    return (
        <>
            <h2 className="mb-4">Almost Done!</h2>
            <p>We have sent you an account verification email with a link to get you started.</p>
            <p className="mt-4 mb-0">
                <span className="hp-text-color-black-80 hp-text-color-dark-40 hp-font-weight-400 hp-mr-16">
                    Already have an account?
                </span>
                &nbsp;&nbsp;
                <span
                    className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-cursor-pointer"
                    onClick={() => change(AuthState.SignIn)}
                >
                    Login
                </span>
            </p>
        </>
    );
}

export default ConfirmSignUp;