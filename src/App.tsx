import { styled } from "styled-components";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Activities from "./components/Activities";
import Coursework from "./components/Coursework";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";

const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    height: auto; /* Prevents layout issues */
    flex-wrap: wrap; /* Ensures content can move properly */

    @media screen and (max-width: 750px) {
        flex-direction: column; /* Stacks Nav on top */
    }
`;;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 70%; 

    @media (max-width: 1000px) {
        width: 100%; 
    }
`;

const Wrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
`;

function Root() {
    return (
        <Wrapper>
            <Header />
            <MainContent>
                <Nav />
                <Content>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/activities" element={<Activities />} />
                        <Route path="/coursework" element={<Coursework />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                    </Routes>
                </Content>
            </MainContent>
            <Footer />
        </Wrapper>
    );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
    return <RouterProvider router={router} />;
}