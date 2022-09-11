import { FaTasks, FaPeopleCarry } from 'react-icons/fa';
import { MdConstruction, MdAgriculture, MdSupervisorAccount } from "react-icons/md"
import { GiHumanPyramid, GiTreehouse } from "react-icons/gi"
import { SiFlathub } from "react-icons/si"
import { BsBuilding } from "react-icons/bs"
import { AiOutlineMonitor } from "react-icons/ai"
import { BiTask } from "react-icons/bi"


const completedProjects = [
    { id: 1, label: "Completed Projects", value: 60, chartColor: "#1B998B", color: "secondary", icon: FaTasks },
    { id: 2, label: "Total Projects", value: 100, chartColor: "#C96480", color: "primary", icon: BiTask },
];

const monitoredProjects = [
    { id: 1, label: "Monitored Projects", value: [1, 5, 2, 5, 4], color: "secondary", icon: AiOutlineMonitor },
    { id: 2, label: "Total Projects", value: [1, 5, 2, 5, 4].reverse(), color: "primary", icon: BiTask },
];

const themanticPillarProjects = [
    {id: 1, value: 32, chartColor: "#262B40", color: "secondary", label: "Human Capital Development", code: "HCD", icon: GiHumanPyramid},
    {id: 2, value: 47, chartColor: "#262B40", color: "primary", label: "Leadership in Agriculture", code: "LAG", icon: MdAgriculture},
    {id: 3, value: 15, chartColor: "#61DAFB", color: "danger", label: "Healthy Citizenry", code: "H", icon: FaPeopleCarry},
    {id: 4, value: 65, chartColor: "#1B998B", color: "warning", label: "Sustainable Environment", code: "E", icon: GiTreehouse},
    {id: 5, value: 34, chartColor: "#C96480", color: "secondary", label: "Regional Trade Hub", code: "TB", icon: SiFlathub},
    {id: 6, value: 32, chartColor: "#f5b759", color: "primary", label: "Reconstruction, Rehabilitation", code: "RRR", icon: MdConstruction},
    {id: 7, value: 65, chartColor: "#C96480", color: "dark", label: "Purposeful Infrastructure", code: "PI", icon: BsBuilding},
    {id: 8, value: 75, chartColor: "#cd632g", color: "secondary", label: "Accountable Governance", code: "AG", icon: MdSupervisorAccount},
]

const totalOrders = [
    { id: 1, label: "Completed Projects", value: [1, 5, 2, 5, 4, 3], color: "primary" },
    { id: 2, label: "All Projects", value: [2, 3, 4, 8, 1, 2], color: "secondary" }
];

export {
    completedProjects,
    monitoredProjects,
    themanticPillarProjects,
    totalOrders
};