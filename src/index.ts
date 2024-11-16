import AxiosWrapper from './classes/AxiosWrapper';
import GETWrapper from "./classes/GETWrapper";
import POSTWrapper from "./classes/POSTWrapper";
import PUTWrapper from "./classes/PUTWrapper";
import DELETEWrapper from "./classes/DELETEWrapper";
import Request from "./classes/Requet";

const axiosWrapper=new AxiosWrapper ();
export {AxiosWrapper,GETWrapper,POSTWrapper,PUTWrapper,DELETEWrapper,Request,axiosWrapper};
