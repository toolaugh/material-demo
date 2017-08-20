/* eslint-disable react/jsx-boolean-value */
/**
 * Created by NguyenBa on 7/28/2017.
 */
import React, { Component } from 'react';
import Pagination from 'material-ui-pagination';
import DataTables from 'material-ui-datatables';
import RaisedButton from 'material-ui/RaisedButton';

export default class HomePage extends Component {

    handleFilterValueChange = (value) => {
        // your filter logic
        console.log('change Value');
    }

   handleSortOrderChange = (key, order) => {
        // your sort logic
        console.log('Sort Change Value');
    }

    render() {
        const TABLE_COLUMNS = [
            {
                key: 'name',
                label: 'Dessert (100g serving)',
            }, {
                key: 'calories',
                label: 'Calories',
            },
            {
                key: 'fat',
                label: 'fat',
            },
            {
                key: 'carbs',
                label: 'carbs',
            },
        ];

        const TABLE_DATA = [
            {
                name: <a>Frozen yogurt</a>,
                calories: <RaisedButton label="test Button" />,
                fat: '6.0',
                carbs: '24',
            }, {
                name: 'Ice cream sandwich',
                calories: '159',
                fat: '6.0',
                carbs: '24',
            },
        ];
        return (
            <div className="align-center">
                <h1>Home Page</h1>
                <Pagination
                    total={10}
                    current={2}
                    display={4}
                />
                <DataTables
                    height={'auto'}
                    selectable={false}
                    showRowHover={true}
                    columns={TABLE_COLUMNS}
                    data={TABLE_DATA}
                    showCheckboxes={false}
                    onCellClick={this.handleCellClick}
                    onCellDoubleClick={this.handleCellDoubleClick}
                    onFilterValueChange={this.handleFilterValueChange}
                    onSortOrderChange={this.handleSortOrderChange}
                    page={1}
                    count={100}
                />
            </div>

        );
    }
};
