import TextField from '@mui/material/TextField';
import { FunctionComponent } from 'react';

import { useConfig } from '@kombu/react';

import { Config } from './config';

const Editor: FunctionComponent = () => {
  const config = useConfig<Config>();

  return (
    <div>
      <TextField id="filled-basic" label="Color" variant="filled" value={config?.color} />
    </div>
  );
};

export default Editor;
