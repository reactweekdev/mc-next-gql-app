import { gql } from '@apollo/client'

export const ContinentType: any = {}

ContinentType.fragments = {
    common: gql`
        fragment CommonFields on Continent {
            code
            name
        }
    `,
}

export const ALL_CONTINENTS = gql`
    query {
        continents {
            ...CommonFields
            countries {
                name
                code
            }
        }
    }
    ${ContinentType.fragments.common}
`
