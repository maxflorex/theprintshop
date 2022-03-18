import { getDownloadURL, listAll } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { gsAluminumRef } from '../firebase/config';
import { Column, Items6 } from './Styled/divs/Styled';

const ListAll = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        listAll(gsAluminumRef)
            .then((res) => {
                res.prefixes.map((folderRef) => {
                    console.log(folderRef);
                });
                const myUrl = res.items;
                setList(myUrl);
                res.items.map((itemRef) => {
                    getDownloadURL(itemRef).then((url) => {
                        // const myUrl = JSON.parse(url);
                    });
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [listAll]);

    const data = list[0];

    console.log(data);

    return (
        <Column>
            {list.map((data, index) => {
                <div key={index}>
                    <h1>{data.url}</h1>;
                </div>;
            })}
        </Column>
    );
};

export default ListAll;
