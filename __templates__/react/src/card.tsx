import styled from '@emotion/styled';
import { React } from 'mdi-material-ui';
import { FunctionComponent } from 'react';

import { useConfig, useEntity, useUser } from '@kombu/react';

import { Config } from './config';

const Card: FunctionComponent = () => {
  const user = useUser();
  const sun = useEntity('sun.sun');
  const config = useConfig<Config>();

  const firstName = user?.name.split(' ')[0];
  const timeOfDay = sun?.state === 'above_horizon' ? 'daytime' : 'nighttime';

  return (
    <ha-card>
      <Root>
        <Header>
          <React />
          <span>
            <b>@kombu/react</b>
          </span>
        </Header>
        <Text>Hey {firstName}!</Text>
        <Text>
          It is <b>{timeOfDay}.</b>
        </Text>
        {config?.color ? (
          <Text color={config.color}>You chose {config.color}!</Text>
        ) : (
          <Text>Set a color in the editor!</Text>
        )}
      </Root>
    </ha-card>
  );
};

export default Card;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  font-size: 0.9rem;
`;

const Root = styled.div`
  padding: 1rem;
`;

const Text = styled.p<{ color?: string }>`
  margin: 0;
  color: ${(props) => props.color || 'inherit'};
`;
