import React from 'react'
import LoginButton from '../components/LoginButton'

const DefaultPage = () => {
  return (
    <div>
        <div className="flex w-full items-center py-12 px-6  justify-center mt-20 ">
            <div>
                <div className="max-w-xs h-64 flex flex-col justify-between bg-white  rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div>
                        <h4 className="text-gray-800  font-bold mb-3">Sign In to get all Informations about Countries in the world</h4>
                        <p className="text-gray-800  text-sm">If you are new to this please signup using your email and verify your email before SignIn</p>
                    </div>
                    <div>
                       <LoginButton/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DefaultPage
