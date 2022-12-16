import styled from 'styled-components'
import {devices} from './media-queries.js'

export const Button2 = styled.button`
    background: #1762A7;
    cursor: pointer;
    font-size: 1em;
    margin-top: 1em;
    padding: 4px 12px;
    border-radius: 8px;
    border-color: #1762A7;
    color: white;
    width: 300px;
    
    
    @media ${devices.mobile} {
    
        width: 100px;
  }

    &:hover {
        background: #2180d8;
        border-radius: 8px;
    }
`

export default Button2