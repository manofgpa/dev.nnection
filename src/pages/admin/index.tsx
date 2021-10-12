import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
  Spinner,
} from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Admin() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

    return data
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  useEffect(() => {}, [])

  return (
    <Flex direction='column' h='130vh' bg='gray.900'>
      <Header />

      <Flex
        w={['auto', '100%']}
        my='6'
        maxWidth={1480}
        mx='auto'
        px='6'
        color='gray.50'>
        <Sidebar />
        <Box
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p='8'
          h={['122vh', '0vh']}
          mt={['10', '10', '20']}
          ml={['0', '0', '0', '60']}>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Users
            </Heading>
            <Link href='/admin/createUser'>
              <Button
                as='a'
                size='md'
                fontSize='md'
                colorScheme='green'
                leftIcon={<Icon as={RiAddLine} />}>
                Create user
              </Button>
            </Link>
          </Flex>
          {isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>Fail to fetch data.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme='blackAlpha'>
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color='gray.300' width='8'>
                      <Checkbox colorScheme='green' />
                    </Th>
                    <Th>User</Th>
                    <Th>Registration date </Th>
                    <Th w='8'></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme='green' />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight='bold'>Felipe Mano</Text>
                        <Text fontSize='small' color='gray.300'>
                          manofgpa@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>October 10, 2021</Td>}
                    <Td>
                      <Button
                        as='a'
                        size='md'
                        fontSize='md'
                        colorScheme='orange'
                        leftIcon={<Icon as={RiPencilLine} />}>
                        Edit
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme='green' />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight='bold'>Felipe Mano</Text>
                        <Text fontSize='small' color='gray.300'>
                          manofgpa@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>October 10, 2021</Td>}
                    <Td>
                      <Button
                        as='a'
                        size='md'
                        fontSize='md'
                        colorScheme='orange'
                        leftIcon={<Icon as={RiPencilLine} />}>
                        Edit
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme='green' />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight='bold'>Felipe Mano</Text>
                        <Text fontSize='small' color='gray.300'>
                          manofgpa@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>October 10, 2021</Td>}
                    <Td>
                      <Button
                        as='a'
                        size='md'
                        fontSize='md'
                        colorScheme='orange'
                        leftIcon={<Icon as={RiPencilLine} />}>
                        Edit
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Flex>
  )
}
