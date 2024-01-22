import { Button, Flex, Input, InputRef } from 'antd';
import React, { useRef } from 'react';
import './Popup.css';

const Popup = () => {
  const inputRef = useRef<InputRef>(null);
  return (
    <div className="App">
      <Flex
        gap="8px"
        vertical
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Input ref={inputRef} />
        <Flex justify={'end'} gap="8px">
          <Button
            onClick={async () => {
              console.log(inputRef.current?.input?.value);
              chrome.tabs.query(
                { currentWindow: true, active: true },
                function (tabs) {
                  var activeTab = tabs[0];
                  if (activeTab.id) {
                    chrome.tabs.sendMessage(
                      activeTab.id,
                      {
                        type: 'start',
                        searchedText: inputRef.current?.input?.value,
                      },
                      (...args) => {
                        console.log('finished', args);
                      }
                    );
                  }
                }
              );
            }}
            type="primary"
          >
            Find
          </Button>
          <Button
            onClick={async () => {
              console.log(inputRef.current?.input?.value);

              chrome.tabs.query(
                { currentWindow: true, active: true },
                function (tabs) {
                  var activeTab = tabs[0];
                  if (activeTab.id) {
                    chrome.tabs.sendMessage(
                      activeTab.id,
                      {
                        type: 'reset',
                      },
                      (...args) => {
                        console.log('finished', args);
                      }
                    );
                  }
                }
              );
            }}
            danger
          >
            Reset
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default Popup;
