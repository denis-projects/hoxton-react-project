import React from 'react';
import '../styles/About.css'

function About() {
    return (
        <div className='about'>
            <div className='aboutBottom'>
                <img src='assets\Homepage Photo.jpeg' alt="" />

                <div className='testimonialsSection'>
                    <div className='testimonialSection'>
                        <h3 className='testimonialName'>Ed (Teacher)</h3>
                        <p className='testimonialText'>Hoxton Accademy is the perfect place to start your carrier as a Full-Stack Developer. Our goal is to help the students to learn as much as possibile in a modern way.</p>
                    </div>
                    <div className='testimonialSection'>
                        <h3 className='testimonialName'>Denis (Student)</h3>
                        <p className='testimonialText'>When i start at Hoxton Academy i did not know nothing about codding. In just 6 months here you can be from Zero to Hero.</p>
                    </div>
                    <div className='testimonialSection'>
                        <h3 className='testimonialName'>Visard (Student)</h3>
                        <p className='testimonialText'>It was my dream come true to be at Hoxton. Here, Teachers teach us highly required skills with lot of patience and passion.</p>
                    </div>
                </div>

            </div>
            <div className='aboutTop'>

                <div>
                    <h2>Our Headmaster Teacher</h2>
                    <h3>Nicolas Marcora</h3>
                    <p>“Our mission is to make a better world through education. I’m very excited to be working on a curriculum and methodology that will not only teach students the latest technologies they need to know to thrive in the industry, but will ultimately shape them into great problem solvers and communicators, providing them with skills that will prove extremely valuable throughout the rest of their careers,” says Nicolas Marcora, Headmaster at Hoxton Academy.</p>
                    <p> Marcora believes that Hoxton Academy training will also benefit companies greatly, providing them with a pool of talented young individuals, eager to learn and capable of adapting to overcome any problem.</p>
                </div>
                <div>
                    <h2>Abuot Hoxton Academy</h2>
                    <p><b>The mission of Hoxton Academy is to build the next generation of software engineers not only changing young people’s lives but also helping businesses find and retain talent.
                        With millions of businesses around the world increasing their digital transformation efforts, a big challenge lies ahead for the global economy, talent shortage.</b> </p>


                    <p>Hoxton Academy, a project started as a close partnership between London, Tirana and Pristina, is coming to Albania thanks to ICTSmedia and Twig and it represents an innovative professional education methodology with immediate employment outcomes.</p>
                    <p>The mission of Hoxton Academy is to build the next generation of software engineers not only changing young people’s lives but also helping businesses find and retain talent.Hoxton Academy is a company with a London HQ, focused on professional education and helping individuals start a new career in software development in only 6 months.</p>
                    <p> These individuals will learn about coding, cooperation, communication and new skills that will help them become future professionals.</p>
                    <p>A wide partnership between Hoxton Academy and companies such as Twig, Hajde, ICTSlab, OneUp, Baboon, Monochain and Laralara, which are committed to offering scholarships for students who are selected to become part of the academy.</p>
                </div>

            </div>


        </div>
    )

}
export default About;
