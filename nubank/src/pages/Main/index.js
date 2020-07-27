import React from 'react';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo Disponivel</Title>
            <Description>R$ 123.456,78</Description>
          </CardContent>
          <CardFooter>
            <Annotation>Transferencia de fulano as 15h horas...</Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
