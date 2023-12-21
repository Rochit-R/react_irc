import React from 'react'
import Music from '../assets//images/Loading1.json'
import Lottie from 'react-lottie';
const Loading = (WrappedComponent) => {
    const defaultOptions={
        loop:true,
        autoplay:true,
        animationData:Music,
        renderSettings:{
            preserveAspectRatio:"xMidYMid slice"
        }
    };
    return class Loading extends React.Component{
        state={
            isLoading:true
        }
        componentDidMount(){
            setTimeout(()=>{
                this.setState({isLoading:false});
            },2000);
        }
        render(){
            const{isLoading}=this.state;
            return(isLoading?(

            <Lottie options={defaultOptions} width={'500px'} height={'500px'}></Lottie>
            ):(
                <WrappedComponent{...this.props}/>
            ))
        }
    }
  
}

export default Loading;