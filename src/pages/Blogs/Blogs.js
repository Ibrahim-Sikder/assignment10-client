import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
    return (
        <div>
            <h2>This is blogs</h2>
            <div>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is Cors?</Accordion.Header>
                        <Accordion.Body>
                            Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others. <br /> <br />

                            CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari. The standard has been accepted as a W3C Recommendation in January 2014. Based on that, we can assume that it is implemented in all currently available and other than listed web browsers.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                            Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. <br /> <br />

                            You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration. <br /> <br />

                            One of the most important aspects of website authentication is the focus on the user and human-to-computer interactions. As a result, user authentication is crucial to understand when creating or improving your website’s login procedure. <br /> <br />

                            Whether you’re looking to amp up your internal security, increase customer acquisition, or simply provide a better user experience for individuals exploring your site, it’s important to know how user authentication fits into the equation.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How does the private route work?</Accordion.Header>
                        <Accordion.Body>
                            React Router is one of the most important components of React ecosystem. In this tutorial, we will learn how to build different types of routes including private, public, and restricted routes. For a quick demonstration, we will build a simple application with following components: <br /> <br />

                            <br /> <br /> Home: a public route that everyone can access to.
                            <br /> <br /> Dashboard: a private route that only authenticated user can access to.
                            <br /> <br /> Sign-in: a restricted route that unauthenticated user can see. To explain more, we don’t want to show the sign-in page after logged in to the site. If the authorised user goes to the sign-in page, we will redirect to dashboard page. <br /> <br />

                            PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                        <Accordion.Body>
                            Per the Node.js homepage, Node “uses an event-driven, non-blocking I/O model.” In practice, this means that Node is built well to handle asynchronous JavaScript code to perform many asynchronous activities such as reading and writing to the file system, handling connections to database servers, or handling requests as a web server. <br /> <br />

                            Well, I guess too many people will say that Node.js is a JavaScript engine for server-side applications. In my opinion, while that is not quite wrong, that does not capture the essence of Node.js, which is actually an event-driven application programming platform.

                            In other words, the thing that defines Node.js is actually libuv. Not the V8 JavaScript engine.

                            So, what does libuv have that makes it so special, and why JavaScript?
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;