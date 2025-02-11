/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Dialog, DialogContent, DialogTitle } from '@rmwc/dialog';
import React from 'react';

import { useIsEmulatorDisabled } from '../common/EmulatorConfigProvider';

export const AppDisconnected: React.FC = () => {
  const disabled = useIsEmulatorDisabled();
  if (!disabled) {
    return null;
  }

  return (
    <Dialog open preventOutsideDismiss>
      <DialogTitle>Emulator Suite Disconnected</DialogTitle>
      <DialogContent>
        All emulators for this project have stopped running. To restart all
        emulators, at the command line, run{' '}
        <code>firebase emulators:start</code>.
      </DialogContent>
    </Dialog>
  );
};

export default AppDisconnected;
