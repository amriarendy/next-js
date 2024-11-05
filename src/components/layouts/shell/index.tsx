import { type } from "os";
import Navbar from "../navbar";

type ShellProps = {
    children: React.ReactNode;
}

const Shell = (props: ShellProps) => {
    const { children } = props;
    return (
        <>
            <main>
                <Navbar />
                {children}
            </main>
        </>
    )
}

export default Shell;