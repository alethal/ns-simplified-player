import React from 'react';
import {Match, Redirect } from "@reach/router";
export default function RedirectPageComponent(){
    return (
        <Match path="/weekendstoredirectpagethree">
            {props =>
                props.match ? (
                    <div><Redirect to="/weekends" /></div>
                ) : (
                    <div>The Path is NOT "weekends-"</div>
                )
            }
        </Match>
    )
}








