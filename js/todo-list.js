let task_id = 1;
let todoList = [];

const add_btn = document.getElementById('add_btn');


function addTodo(){
    // 入力されたタスクを取得
    const taskText = document.getElementById('task').value;

    // バリデーション
    if( taskText.length > 0 ){
        const todo = {
            task : taskText,
            status : '作業中' // 初期値
        };
        todoList.push(todo);
        
        // タスク入力ボックスをクリア
        document.getElementById('task').value = '';
    }

}

function showTodoList(){
    // タスク追加先のtable要素を取得
    const task_table = document.getElementById('task_table_body');

    /***** 1列目 *****/
    // テーブルに行を追加
    let new_row = task_table.insertRow();
    // 行にセルを追加
    let new_cell = new_row.insertCell();
    // テキストノード作成
    let new_text = document.createTextNode(task_id);
    // セルにテキストノードを追加
    new_cell.appendChild(new_text);
    task_id++;

    /***** 2列目 *****/
    new_cell = new_row.insertCell();
    new_text = document.createTextNode(todoList[todoList.length-1]['task']);
    new_cell.appendChild(new_text);
}

function makeBtn(btnLabel){
    // タスク追加先のtable要素を取得
    const task_table = document.getElementById('task_table_body');
    // 最後の行を取得
    const rowLength = task_table.rows.length;
    let last_row = task_table.rows[rowLength-1];
    // 行にセルを追加
    let new_cell = last_row.insertCell();
    // ボタン要素生成
    let status_btn = document.createElement('button');
    status_btn.textContent = btnLabel;
    new_cell.appendChild(status_btn);
    
}

add_btn.addEventListener('click', function() {
    // todoを追加
    addTodo();

    // todoを表示
    showTodoList();

    // 状態ボタンを表示
    makeBtn(todoList[todoList.length-1]['status']);

    // 削除ボタンを表示
    makeBtn('削除');
});