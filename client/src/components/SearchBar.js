import React from 'react'
import { Container } from '@chakra-ui/react'
import { Form } from 'react-bootstrap'

const SearchBar = ({ search, setSearch }) => {
    return (
        <Container mt={4}>
            <Form.Control
                type="search"
                placeholder="Search Songs/Artists"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </Container>
    )
}

export default SearchBar
