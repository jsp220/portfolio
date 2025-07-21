import { Link } from "react-router-dom";
import Dashboard from "/assets/images/dashboard.jpg";

const Projects = () => {
    return (
        <>
            <h1 className="text-xl font-medium py-1">Projects</h1>

            <Link to="https://finance-dashboard-dun.vercel.app/">
                <img className="py-4" src={Dashboard}></img>
            </Link>

            <h2 className="font-bold pb-2">
                <Link to="https://finance-dashboard-dun.vercel.app/">
                    Personal Finance Dashboard
                </Link>{" "}
                <span className="text-sm">
                    (
                    <Link to="https://github.com/jsp220/finance-dashboard">
                        GitHub Repo
                    </Link>
                    )
                </span>
            </h2>
            <p className="pb-2">
                Simple web app designed to allow users to track their income and
                spending on different financial accounts. Built with
                Next.js/TypeScript, TailwindCSS, Postgres, and Prisma Client.
            </p>
        </>
    );
};

export default Projects;
