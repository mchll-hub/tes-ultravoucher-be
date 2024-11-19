SELECT table1.id,
    table1.name,
    table2.name AS parent_name
FROM table1
    LEFT JOIN table2 ON table1.parent_id = table2.id;