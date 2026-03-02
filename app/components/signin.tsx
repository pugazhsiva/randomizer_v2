import { Button, Modal } from "react-aria-components";


export default function SignIn() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Modal>
                <Button>Google Sign In</Button>
            </Modal>
        </div>
    )
}

