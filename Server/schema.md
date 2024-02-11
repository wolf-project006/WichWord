# Schema Design

`pk` = Primary Key
`ref: >` = Many to one
`ref: <` = One to many
`ref: -` = One to one

## Users Table

```
Table users {
  id int [pk]
  user_name varchar(32) [not null]
  nick_name varchar(32)
  hashed_password text
  salt text
  highest_score int
}
```