import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { IoIosPeople } from 'react-icons/io';
  import { GiHealthCapsule } from 'react-icons/gi';
  import { MdLocationCity } from 'react-icons/md';
  import { useEffect, useState } from "react";
  
  interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
  }

 function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
export function StatisticsCard() {
    const [vaccinations, setVaccinations] = useState(6000);

      //Create random disabled dates.
    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max) + 2;
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setVaccinations(vaccs => vaccs + getRandomInt(10))
      }, 3000);
      return () => clearInterval(interval);
    }, []);

    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Help flatten the curve. Get vaccinated!
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Vaccinated UP Constituents'}
            stat={vaccinations.toString()}
            icon={<IoIosPeople size={'3em'} />}
          />
          <StatsCard
            title={'Available Vaccinations'}
            stat={'80,000+'}
            icon={<GiHealthCapsule size={'3em'} />}
          />
          <StatsCard
            title={'Vaccination Facilities'}
            stat={'29'}
            icon={<MdLocationCity size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    );
  }