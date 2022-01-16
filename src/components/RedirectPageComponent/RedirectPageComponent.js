import React from 'react';
import { Match } from '@reach/router';
export default function RedirectPageComponent(){
    return (
        <Match path="/oneredirectpage">
            {props =>
                props.match ? (
                    <div>The Path is "OneRedirectPage"</div>
                ) : (
                    <div>The Path is NOT "The Redirect"</div>
                )
            }
        </Match>
    )
}








