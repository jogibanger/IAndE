CREATE TYPE dbo.MyDataTable -- you can be more speciifc here
AS TABLE
(
col1 INT,
col2 DATETIME
-- etc etc. The columns you have in your data table.
);
GO

CREATE PROCEDURE dbo.InsertMyDataTable
@dt AS dbo.MyDataTable READONLY
AS
BEGIN
SET NOCOUNT ON;

INSERT dbo.RealTable(column list) SELECT column list FROM @dt;
END
GO

 

 

C# CODE

 

DataTable tvp = new DataTable();
// define / populate DataTable

using (connectionObject)
{
SqlCommand cmd = new SqlCommand("dbo.InsertMyDataTable", connectionObject);
cmd.CommandType = CommandType.StoredProcedure;
SqlParameter tvparam = cmd.Parameters.AddWithValue("@dt", tvp);
tvparam.SqlDbType = SqlDbType.Structured;
cmd.ExecuteNonQuery();
}
