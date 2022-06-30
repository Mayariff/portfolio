import React from 'react';
import s from "./Projects.module.scss"
import style from "../common/styles/Container.module.scss"
import Project, {projectType} from "./progect/Project";
import TitleSector from "../common/TitleForSectors/TitleSector";
import sotialImg from '../assets/image/d5dd8178bc5d6407e2343bc09f2b3a16.jpg'
import culcImg from '../assets/image/da5cfd3959125060045275e5d6a48dec.jpg'
import officeIMG from  '../assets/image/todo.jpg'
import calculatorIMG from  '../assets/image/fb249525419fe447488edb168db3c8bb.jpg'

const Projects = () => {

    const projects: Array<projectType>=[{
        title: "Social Network",
        technology: 'React & Redux',
        demo: 'https://mayariff.github.io/my-social-network/',
        showCode: 'https://github.com/Mayariff/my-social-network',
        image: culcImg,
        description: "Do you want to find like-minded people? Social network is what you need. On it you can log in, write posts, create your own profile, add friends and view information about them.",
        id: '1',
    },
        {
            title: "Learning Cards",
            technology: 'React & Redux',
            demo: 'https://mayariff.github.io/Cards/',
            showCode: 'https://github.com/Mayariff/Cards',
            image: sotialImg,
            description: "The application is made for learning through the game. Cards are assigned a rating, which affects how often the card will be shown to you. Create your own cards or learn packs from other users.",
            id: '2',
        },
        {
            title: "To Do List",
            technology: 'React & Redux',
            demo: 'https://mayariff.github.io/my-to-do/',
            showCode: 'https://github.com/Mayariff/my-to-do',
            image: officeIMG,
            description: "The application is made for learning through the game. Cards are assigned a rating, which affects how often the card will be shown to you. Create your own cards or learn packs from other users.",
            id: '3',
        },
        {
            title: "CОNTACTLIST",
            technology: 'React & Redux',
            demo: 'https://github.com/Mayariff/testTask',
            showCode: 'https://github.com/Mayariff/testTask',
            image: calculatorIMG,
            description: "This is a counter that was written as a simple business process model to show interaction in CRM. Counter increments values from min to max, which you can assign in the settings.",
            id: '4',
        }
    ]

    return (
        <div className={s.projectsBlock} id={`projects`}>
            <div className={style.container}>
                <TitleSector titleDiscription={'My study projects'} title={"Projects"} />
                <div className={s.projects}>
                    {projects.map(p=> <Project title={p.title}
                                               technology={p.technology}
                                               description={p.description}
                                               id={p.id} key={p.id}
                                               image={p.image}
                                               demo={p.demo}
                                               showCode={p.showCode}/>)
                    }

                   {/* <Project
                        id={'2'}
                        image ={culcImg}
                        title={"Проект 2"}
                        technology={'React'}
                        description={"okbmbom orioborb sfvsvds"}/>*/}
                </div>
            </div>
        </div>
    );
};

export default Projects;