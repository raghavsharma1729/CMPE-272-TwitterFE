import React from 'react';
/**
 * Author: Nohar Reddy Gurrala <noharreddy.gurrala@sjsu.edu>
*/
export const TableHead = () => {
    return (<thead style={{ border: "1px solid", fontWeight: "bold" }}>
        <tr>
            <th> Author Id</th>
            <th>Description</th>
            <th>Delete</th>
        </tr>
    </thead>);
}