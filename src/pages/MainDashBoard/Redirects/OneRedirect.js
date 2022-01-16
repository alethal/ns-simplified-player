import React from 'react';
import {Match, Redirect } from "@reach/router";
export default function RedirectPageComponent(){
    return (
        <Match path="/weekends-*">
            {props =>
                props.match ? (
                    <div><Redirect to="/weekendslandingpage" /></div>
                ) : (
                    <div>The Path is NOT "The Redirect"</div>
                )
            }
        </Match>
    )
}








