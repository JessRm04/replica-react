import React from 'react'
import styled from 'styled-components'

const sizes = {
    mobile: '400px',
    laptop: '1024px',
    };

  export const devices = {
    mobile: `(max-width: ${sizes.mobile})`,
    laptop: `(min-width: ${sizes.laptop})`,
    };