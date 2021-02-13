let task_id = 1;
let todos = [];

const add_btn = document.getElementById('add_btn');

function displayTodos(todos){
    // タスク追加先のtable要素を取得
    let task_table = document.getElementById('task_table_body');

    /***** 1列目 *****/
    // テーブルに行を追加
    let new_row = task_table.insertRow();
    // 行にセルを追加
    let new_cell = new_row.insertCell();
    // テキストノード作成
    let new_text = document.createTextNode(task_id);
    // セルにテキストノードを追加
    new_cell.appendChild(new_text);

    /***** 2列目 *****/
    new_cell = new_row.insertCell();
    new_text = document.createTextNode(todos[todos.length-1]['task']);
    new_cell.appendChild(new_text);
    task_id++;

    /***** 3列目 *****/
    let status_btn = document.createElement('BUTTON');
    status_btn.textContent = todos[todos.length-1]['status'];
    new_row.appendChild(status_btn);

    /***** 4列目 *****/
    let remove_btn = document.createElement('BUTTON');
    remove_btn.textContent = '削除';
    new_row.appendChild(remove_btn);

}

add_btn.addEventListener('click', function() {
    // 入力されたタスクを取得
    let taskText = document.getElementById('task').value;

    if( taskText.length > 0 ){
        
        let todo = {
            task : taskText,
            status : '作業中'

        };

        console.log(taskText);

        todos.push(todo);

        displayTodos(todos);
        
        // タスク入力ボックスをクリア
        document.getElementById('task').value = '';
    }
});