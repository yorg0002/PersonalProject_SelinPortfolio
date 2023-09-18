import {GoDatabase} from 'react-icons/go'
import {RiReactjsLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiFillAppstore} from 'react-icons/ai'


const data = [
    {
        id: 1, icon: <GoDatabase/>, title: 'Languages and Databases', desc: " Java, Python, SQL (Oracle, MySQL, PostgreSQL), MongoDB, Neo4J JavaBeans, JSP, JavaScript, HTML, CSS, PHP"
    },
    {
        id: 2, icon: <RiReactjsLine/>, title: 'Frameworks', desc: "React, Node.js, JUnit, Hibernate, JSF"
    },
    {
        id: 3, icon: <FaServer/>, title: 'Developer Tools', desc: "GitHub, VS Code, Eclipse, NetBeans, Android Studio, WireShark, Ubuntu"
    },
    {
        id: 4, icon: <AiFillAppstore/>, title: 'Libraries', desc: 'Pandas, NumPy, Matplotlib, npm'
    }
]


export default data